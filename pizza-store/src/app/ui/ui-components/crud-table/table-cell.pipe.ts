import { Pipe, PipeTransform } from '@angular/core';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';

@Pipe({
  name: 'tableCell',
  pure: true,
})
export class TableCellPipe<T> implements PipeTransform {

  transform(value: any, columnDef: ColumnDefinition): any {
    const path = columnDef.name.split('.');
    return this.getPath(value, path);
  }

  private getPath(value: any, path: string[]) {
    const key = path.shift();
    if (key) {
      return this.getPath(value[key], path);
    } else {
      return value;
    }
  }

}
