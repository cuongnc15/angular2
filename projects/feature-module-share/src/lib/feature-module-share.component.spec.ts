import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModuleShareComponent } from './feature-module-share.component';

describe('FeatureModuleShareComponent', () => {
  let component: FeatureModuleShareComponent;
  let fixture: ComponentFixture<FeatureModuleShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureModuleShareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureModuleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
