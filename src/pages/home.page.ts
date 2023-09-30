import type { Locator } from '@playwright/test'
import { BasePage } from './base.page'

export class HomePage extends BasePage {

    public readonly textBox = this.page.getByPlaceholder('What needs to be done?')
    public readonly allButton = this.page.getByRole('link', { name: 'All' })
    public readonly activeButton = this.page.getByRole('link', { name: 'Active' })
    public readonly completedButton = this.page.getByRole('link', { name: 'Completed' })
    public readonly clearCompletedButton = this.page.getByRole('button', { name: 'Clear completed' })
    public readonly markAllCompletedButton = this.page.getByText('Mark all as complete')
    public readonly itemsLeft = this.page.getByText('All Active Completed')
    public readonly todoList = this.page.locator('//html/body/section/section/ul/li')
    public readonly deleteButton = this.page.getByRole('button', { name: '×' })

    async crearTarea(tarea: string){
        await this.textBox.fill(tarea)
        await this.textBox.press('Enter')
    }
    
}

    


    


