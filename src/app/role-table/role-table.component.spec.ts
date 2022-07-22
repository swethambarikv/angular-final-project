import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RoleTableComponent } from './role-table.component';

describe('RoleTableComponent', () => {
  let component: RoleTableComponent;
  let fixture: ComponentFixture<RoleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ RoleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
