import {Component, ElementRef, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {CommonModule} from '@angular/common';

export interface WrapperConfig {
  remoteName: string;
  exposedModule: string;
  elementName: string;
}

export const initWrapperConfig: WrapperConfig = {
  remoteName: '',
  exposedModule: '',
  elementName: ''
};

@Component({
  selector: 'app-wrapper',
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
  elm = inject(ElementRef);
  @Input() config = initWrapperConfig;

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;
    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(elementName);
    this.elm.nativeElement.appendChild(root);
  }

  ngOnDestroy() {
    this.elm?.nativeElement?.dispose?.();
  }
}
