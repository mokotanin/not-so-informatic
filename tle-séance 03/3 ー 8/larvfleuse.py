import math


class Point:
    def calcul_rho(self):
        return math.sqrt(self.__x**2 + self.__y**2)

    def calcul_theta(self):
        return math.atan2(self.__y, self.__x) * 180 / math.pi

    def __init__(self, x, y):
        self.__x = x
        self.__y = y
        self.__rho = self.calcul_rho()
        self.__theta = self.calcul_theta()

    def getx(self):
        return self.__x

    def gety(self):
        return self.__y

    def getrho(self):
        return self.__rho

    def gettheta(self):
        return self.__theta


A = Point(2, 3)
print(A.getx())
print(A.gety())
print(A.getrho())
print(A.gettheta())
