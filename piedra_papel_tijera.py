piedra = 'piedra'
papel = 'papel'
tijera = 'tijera'
user = input('Ingresa la jugada del user: ')
cpu = input('Ingresa la jugada de la cpu: ')


def juego(user, cpu):
    if user != cpu:
        if user == piedra:
            if cpu == papel:
                res = 'Perdiste!'
            elif cpu == tijera:
                res = 'Ganaste!'
        elif user == papel:
            if cpu == piedra:
                res = 'Ganaste!'
            elif cpu == tijera:
                res = 'Perdiste!'
        elif user == tijera:
            if cpu == piedra:
                res = 'Perdiste!'
            elif cpu == papel:
                res = 'Ganaste!'
        else:
            res = 'Please enter a valid option! '
    else:
        res = 'Empate!'
    return res


print(juego(user, cpu))
