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
    public readonly activeTodoList = this.page.locator('body > section > section > ul > li.todo')
    public readonly completedTodoList = this.page.locator('body > section > section > ul > li.todo.completed')
    public readonly totalTodoList = this.page.locator('//html/body/section/section/ul/li')
    public readonly deleteButton = this.page.getByRole('button', { name: '×' })
    public readonly counter = this.page.locator('//html/body/section/footer/span/strong')

    async crearTarea(tarea: string){
        await this.textBox.fill(tarea)
        await this.textBox.press('Enter')
    }

    async editarTarea(tarea: string, nuevaTarea: string){
        await this.page.getByText(tarea, {exact: true}).dblclick()
        await this.page.locator('li').filter({ hasText: tarea }).getByRole('textbox').fill(nuevaTarea)
        await this.page.locator('li').filter({ hasText: nuevaTarea }).getByRole('textbox').press('Enter')
        await this.textBox.click()
    }
       
    async eliminarTarea(tarea: string){
        await this.page.getByText(tarea, {exact: true}).hover()
        await this.deleteButton.click();
    }

    async marcarTarea(tarea: string){
        await this.page.locator('div').filter({ hasText: tarea }).getByRole('checkbox').click()
    }

    async seleccionarFiltro(filtro: string){
        if (filtro.toLocaleLowerCase() === 'active'){
            await this.activeButton.click()
        } else {
            await this.completedButton.click()
        }
    }

    async getNumberOfTareas(): Promise<number>{
        return await this.totalTodoList.count()
    }

    async getNumberOfTareasCompletadas(): Promise<number>{
        return await this.completedTodoList.count()
    }

    async getTituloByPosition(num: number): Promise<string>{
        return await this.getTareaByPosition(num).innerText()
    }

    async getArrayTareas(): Promise<string[]>{
        return await this.totalTodoList.allInnerTexts()
    }

    async getArrayTareasSinCompletar(): Promise<string[]>{
        return await this.activeTodoList.allInnerTexts()
    }

    async getArrayTareasCompletadas(): Promise<string[]>{
        return await this.completedTodoList.allInnerTexts()
    }

    getTareaByPosition(num: number):Locator{
        return this.activeTodoList.nth(num)
    }
}

    


    


