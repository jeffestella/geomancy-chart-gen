#Generates a geomancy shield spread chart given an input of the 4 Mothers either as a list of 4 numbers (0 or 1) or by input name (eg. Fortuna Minor)

def check(num):
    if num==1:
        return 1
    elif num%2 < 1:
        return 0
    else:
        return 1

def gen(fig1,fig2):
    return [check(fig1[i]+fig2[i]) for i in range(4)]

figures = {
    'Via':[1,1,1,1],
    'Cauda Draconis':[1,1,1,0],
    'Puer':[1,1,0,1],
    'Fortuna Minor':[1,1,0,0],
    'Puella':[1,0,1,1],
    'Amissio':[1,0,1,0],
    'Carcer':[1,0,0,1],
    'Laetitia':[1,0,0,0],
    'Caput Draconis':[0,1,1,1],
    'Conjunctio':[0,1,1,0],
    'Acquisitio':[1,1,1,1],
    'Rubeus':[0,1,0,0],
    'Fortuna Major':[0,0,1,1],
    'Albus':[0,0,1,0],
    'Tristitia':[0,0,0,1],
    'Populus':[0,0,0,0]
}

m1,m2,m3,m4 = [],[],[],[]
mothers = [m1,m2,m3,m4]
print(mothers)

#Daughters - calculated by position of mothers. m1 = fire, m2 = air, m3 = water, m4 = earth.
#Each daughter is calculated by position
d5 = [i[0] for i in mothers]
d6 = [i[1] for i in mothers]
d7 = [i[2] for i in mothers]
d8 = [i[3] for i in mothers]
daughters = [d5,d6,d7,d8]
print(daughters)

#Nieces
n9 = gen(m1,m2)
n10 = gen(m3,m4)
n11 = gen(d5,d6)
n12 = gen(d7,d8)
nieces = [n9,n10,n11,n12]
print(nieces)

#Witnesses
w13 = gen(n9,n10)
w14 = gen(n11,n12)
witnesses = [w13,w14]
print(witnesses)

#Judge and Sentence
j15 = gen(w13,w14)
s16 = gen(j15,m1)

print(j15)
print(s16)