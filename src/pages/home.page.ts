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

    async marcarTarea(tarea: string){
        await this.page.locator('div').filter({ hasText: tarea }).getByRole('checkbox').click()
    }

    async crearTarea(tarea: string){
        await this.textBox.fill(tarea)
        await this.textBox.press('Enter')
    }

    async editarTarea(tarea: string, nuevaTarea: string){
        await this.page.getByText(tarea, {exact: true}).dblclick()
        await this.page.locator('li').filter({ hasText: tarea }).getByRole('textbox').fill(nuevaTarea)
        await this.page.locator('li').filter({ hasText: nuevaTarea }).getByRole('textbox').press('Enter');
    }

    async eliminarTarea(tarea: string){
        await this.page.getByText(tarea, {exact: true}).hover()
        await this.deleteButton.click();
    }
}

    


    


