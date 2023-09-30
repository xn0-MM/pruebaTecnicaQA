@crearTarea
Feature: Crear tareas
    Como usuario
    Quiero poder añadir nuevas tareas a mi lista
    Para recordar lo que necesito hacer

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario: Añadir una tarea con éxito
    When introduce el título de la tarea en el campo de texto: Hacer la compra
    Then debería ver una tarea en la lista con el título escrito anteriomente: Hacer la compra

  Scenario: Intentar añadir una tarea vacía
    When pulso la tecla enter sin introducir ningún título en el campo de texto
    Then no se añade una nueva tarea

  Scenario Outline: Añadir varias tareas
    When introduce las siguientes tareas <tareas>
    Then debería ver <numExpectedTareas> tareas

    Examples: 
      | tareas                                             | numExpectedTareas |
      | "Hacer la compra, Ir al gimnasio"                  |                 2 |
      | "Comprar entradas, Quedar con Juan, Tocar el bajo" |                 3 |
