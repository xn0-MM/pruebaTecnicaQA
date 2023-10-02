@contadorTarea
Feature: Contador de tareas pendientes
    Como usuario
    Quiero ver en un contador cuántas tareas tengo pendientes
    Para saber cuántas tarean me quedan por realizar

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: Mostrar tareas pendientes en el contador
    Given el usuario crea las siguientes tareas <tareas>
    And el usuario marca como completadas las tareas <tareasCompletadas>
    Then el contador debería mostrar <numContador> items left

    Examples: 
      | tareas                                                   | tareasCompletadas                    | numContador |
      | "Ir al super"                                            | ""                                   |           1 |
      | "Comprar pan; Arreglar la bici"                          | ""                                   |           2 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio"   | ""                                   |           3 |
      | "Ir al super"                                            | "Ir al super"                        |           0 |
      | "Comprar pan; Arreglar la bici"                          | "Arreglar la bici"                   |           1 |
      | "Comprar Ibuprofeno; Comprar levadura; Ir al gimnasio"   | "Comprar Ibuprofeno; Ir al gimnasio" |           1 |
      | "Comprar Ibuprofeno; Sacar al perro; Comer más verduras" | "Comprar Ibuprofeno"                 |           2 |
