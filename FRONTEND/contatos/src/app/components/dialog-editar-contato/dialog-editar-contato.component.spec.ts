import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarContatoComponent } from './dialog-editar-contato.component';

describe('DialogEditarContatoComponent', () => {
  let component: DialogEditarContatoComponent;
  let fixture: ComponentFixture<DialogEditarContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditarContatoComponent]
    });
    fixture = TestBed.createComponent(DialogEditarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
