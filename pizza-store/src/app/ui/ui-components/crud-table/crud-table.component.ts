import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { filter, take } from 'rxjs/operators';
import { CrudFormContext } from '@ui/ui-components/crud-table/crud-form.context';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudTableComponent<T> implements OnInit, OnChanges {
  displayedColumns: string[];
  source: MatTableDataSource<T>;
  @Input() data: T[];
  @Input() columnsDefinitions: ColumnDefinition[];
  @Output() update = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();
  @Output() add = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('confirmDialog', { static: true }) configTemplate: TemplateRef<any>;
  @ContentChild('form', { static: true }) formTemplate: TemplateRef<any>;
  private formGroup: FormGroup;

  constructor(private matDialog: MatDialog,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setPaginator();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.columnsDefinitions && changes.columnsDefinitions.currentValue) {
      this.displayedColumns = [...this.columnsDefinitions.map(col => col.name), 'actions'];
      const controlConfigs: { [p: string]: AbstractControl } = this.columnsDefinitions.reduce((config, colDef) => {
        config[colDef.name] = this.fb.control({ value: null, disabled: colDef.disabled }, colDef);
        return config;
      }, {});
      this.formGroup = this.fb.group(controlConfigs);
    }
    if (changes.data && changes.data.currentValue) {
      this.source = new MatTableDataSource<T>(this.data);
      this.setPaginator();
    }
  }

  openAddDialog() {
    this.formGroup.reset();
    const config: MatDialogConfig<CrudFormContext<T>> = {
      data: {
        actionLabel: 'Создать',
        closeLabel: 'Закрыть',
        form: this.formGroup,
        title: 'Создание',
        entity: null,
      },
    };
    const dialog = this.matDialog.open(this.formTemplate, config);
    dialog.afterClosed().pipe(
      filter(value => !!value),
      take(1),
    ).subscribe(entity => this.add.emit(entity));
  }

  openUpdateDialog(data: T) {
    this.formGroup.reset(data);
    const config: MatDialogConfig<CrudFormContext<T>> = {
      data: {
        actionLabel: 'Обновить',
        closeLabel: 'Закрыть',
        form: this.formGroup,
        title: 'Редактирование',
        entity: data,
      },
    };
    const dialog = this.matDialog.open(this.formTemplate, config);
    dialog.afterClosed().pipe(
      filter(value => !!value),
      take(1),
    ).subscribe(entity => this.update.emit(entity));
  }

  openDeleteDialog(data: T) {
    const dialog = this.matDialog.open(this.configTemplate);
    dialog.afterClosed().pipe(
      filter(value => !!value),
      take(1),
    ).subscribe(_ => this.delete.emit(data));
  }

  private setPaginator() {
    if (this.paginator) {
      this.source.paginator = this.paginator;
    }
  }

}
