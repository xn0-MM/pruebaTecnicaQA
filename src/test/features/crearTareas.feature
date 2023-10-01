@crearTarea
Feature: Crear tareas
    Como usuario
    Quiero poder añadir nuevas tareas a mi lista
    Para recordar lo que necesito hacer

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario: Añadir una tarea con éxito
    When el usuario crea una tarea con el título "Hacer la compra"
    Then debería ver una tarea en la lista con el título "Hacer la compra"
    And el número de tareas debe ser 1

  Scenario: Intentar añadir una tarea vacía
    When pulso la tecla enter sin introducir ningún título en el campo de texto
    Then el número de tareas debe ser 0

  Scenario Outline: Añadir varias tareas
    When el usuario crea las siguientes tareas <tareas>
    Then debería ver tareas en la lista con los títulos: <tareas>
    Then debería ver <numExpectedTareas> tareas

    Examples: 
      | tareas                                             | numExpectedTareas |
      | "Hacer la compra; Ir al gimnasio"                  |                 2 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo" |                 3 |
