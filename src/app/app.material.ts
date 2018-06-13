import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
} from '@angular/material'
@NgModule({
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatCardModule,
        MatIconModule
    ],
    providers: [],
})
export class AppMaterialModule { }
