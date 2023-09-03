import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoContatoComponent } from './dialog-novo-contato.component';

describe('DialogNovoContatoComponent', () => {
  let component: DialogNovoContatoComponent;
  let fixture: ComponentFixture<DialogNovoContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNovoContatoComponent]
    });
    fixture = TestBed.createComponent(DialogNovoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
