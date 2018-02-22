//
//  main.c
//  game-of-life
//
//  Created by Valentin Le Flem on 22/02/2018.
//  Copyright © 2018 Valentin Le Flem. All rights reserved.
//

#include <stdio.h>

int main(int argc, char *argv[])
{
    int age = 0; // On initialise la variable à 0
    
    printf("Quel age avez-vous ? ");
    scanf("%d", &age); // On demande d'entrer l'âge avec scanf
    printf("Ah ! Vous avez donc %d ans !\n\n", age);
    
    return 0;
}
