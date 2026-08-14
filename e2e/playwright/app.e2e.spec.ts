import { test, expect } from '@playwright/test';
import { AppPage } from './app.po';

test.describe('FirebaseTrivia App', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);
    await page.navigateTo();
  });

  test('should display the toolbar title', async () => {
    await expect(page.toolbarTitle).toHaveText('Trivia');
  });

  test('should display all three board columns', async () => {
    await expect(
      page.page.getByRole('heading', { name: 'Backlog' })
    ).toBeVisible();
    await expect(
      page.page.getByRole('heading', { name: 'In progress' })
    ).toBeVisible();
    await expect(
      page.page.getByRole('heading', { name: 'Done' })
    ).toBeVisible();
  });

  test('should show the initial backlog tasks', async () => {
    await expect(
      page.page.getByRole('heading', { name: 'Buy milk' })
    ).toBeVisible();
    await expect(
      page.page.getByRole('heading', { name: 'Create a Kanban app' })
    ).toBeVisible();
  });

  test('should open the add-task dialog', async () => {
    await page.addTaskButton.click();
    await expect(page.page.getByRole('dialog')).toBeVisible();
    await expect(
      page.page.getByRole('button', { name: 'OK' })
    ).toBeVisible();
    await expect(
      page.page.getByRole('button', { name: 'Cancel' })
    ).toBeVisible();
  });
});
