import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ListTableComponent } from './app/list-table/list-table.component';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
