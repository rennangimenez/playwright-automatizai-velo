import { test, expect } from '@playwright/test'

test('webapp should be online', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page).toHaveTitle(/Velô by Papito/)
})