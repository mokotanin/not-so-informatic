from turtle import *

setup(800, 800)
speed(0)

def arbre(n, longueur):
    if n == 0:
        forward(longueur)
        backward(longueur)
    else:
        forward(longueur / 2)
        left(30)
        arbre(n - 1, longueur / 2)
        right(60)
        arbre(n - 1, longueur / 2)
        left(30)
        backward(longueur / 2)

right(90)
forward(300)
left(180)
arbre(8, 700)
exitonclick()
