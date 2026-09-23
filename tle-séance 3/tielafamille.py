from pyDatalog import pyDatalog as py

py.create_terms("pere,frere,cousin,petit_fils,X,Y,Z,W,A,E")

+pere("A", "B")
+pere("A", "C")
+pere("B", "D")
+pere("B", "E")
+pere("C", "F")
frere(X, Y) <= (pere(Z, X) & (pere(Z, Y)) & ~(X == Y))
cousin(X, Y) <= (pere(Z, X)) & (pere(W, Y)) & (frere(Z, W))
petit_fils(X, Y) <= (pere(Y, Z)) & (pere(Z, X))
print("Frères")
print(frere(X, Y))

"""
print("Cousins")
print(cousin(X,Y))
print("Petit fils")
print(petit_fils(X,Y))
"""
