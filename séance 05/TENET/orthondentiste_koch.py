from turtle import *

setup(400, 400)
speed(0)

def koch(n, l):
    if n == 0:
        forward(l)
    else:
        koch(n - 1, l / 3)
        left(60)
        koch(n - 1, l / 3)
        right(120)
        koch(n - 1, l / 3)
        left(60)
        koch(n - 1, l / 3)

penup()
goto(-70, 150)
pendown()

for i in range(8):
    koch(3, 120)
    right(45)

exitonclick()
