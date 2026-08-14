import { Page, Locator } from '@playwright/test';

export class AppPage {
  readonly page: Page;
  readonly toolbarTitle: Locator;
  readonly addTaskButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toolbarTitle = page.locator('mat-toolbar span');
    this.addTaskButton = page.getByRole('button', { name: 'Add Task' });
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('/');
  }
}
