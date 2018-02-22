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
    int resultat = 0, nombre1 = 0, nombre2 = 0;
    
    // On demande les nombres 1 et 2 à l'utilisateur :
    
    printf("Entrez le nombre 1 : ");
    scanf("%d", &nombre1);
    printf("Entrez le nombre 2 : ");
    scanf("%d", &nombre2);
    
    // On fait le calcul :
    
    resultat = nombre1 + nombre2;
    
    // Et on affiche l'addition à l'écran :
    
    printf ("%d + %d = %d\n", nombre1, nombre2, resultat);
    
    return 0;
}
