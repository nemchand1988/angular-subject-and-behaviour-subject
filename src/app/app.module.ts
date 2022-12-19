import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SubComponent } from './sub/sub.component';
import { UserService } from './user.service';
import { BsubComponent } from './bsub/bsub.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, SubComponent, BsubComponent],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
