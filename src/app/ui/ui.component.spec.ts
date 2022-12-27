import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UiComponent } from './ui.component';

describe('Variacion UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call Variacion method', () => {
    
    let y = [];
    component.a = 2;
    component.b = 1;
    component.x = '0.0, 1.0, 2.0, 3.0';

    component.variacion();
    y = component.TextV;

    expect(y).toEqual([1,3,5,7]);
  });

  it('Should set a model through ngModel', async() => {
    
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="a"]')).nativeElement;

    inputElement.value = '2';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.a).toEqual(2);
  });

  it('Should set b model through ngModel', async() => {
    
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;

    inputElement.value = '1';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.b).toEqual(1);
  });

  
  it('Should set x model through ngModel', async() => {
    
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="x"]')).nativeElement;

    inputElement.value = '0.0,1.0,2.0,3.0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.x).toEqual('0.0,1.0,2.0,3.0');
  });
  
  
  it('should add a, b and x when i click the variacion button ', () => {
    
    component.a = 2;
    component.b = 1;
    component.x = '0.0, 1.0, 2.0, 3.0';

    let meanButton = fixture.debugElement.query(By.css('.Variacion-button'));

    meanButton.triggerEventHandler('click', null);

    expect(component.TextV).toEqual([1,3,5,7]);

  });

  
  it('Should render y in result', () => {
  
    component.a = 2;
    component.b = 1;
    component.x = '0.0, 1.0, 2.0, 3.0';

    component.variacion();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.resultV'));
    let el : HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('1,3,5,7');
  });
  

});
