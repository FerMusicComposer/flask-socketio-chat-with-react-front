import datetime
import json
from flask import Flask, request, session
from flask_socketio import SocketIO, send, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app,  logger=True, engineio_logger=True,
                    cors_allowed_origins="*")


@socketio.on('connect')
def on_connect():
    print('the SID is: ', request.sid)


@socketio.on('join')
def on_join(data):
    user = data["user"]
    room = data["room"]

    if user != '' or user is not None:
        session.permanent = True
        session["name"] = user
        session["room"] = room

        join_room(room)
        emit('status', {'msg': user +
             ' ya puedes contactar a tu pina!'}, room=room)


@socketio.on('message')
def handle_message(data):
    print('received message:', data)


@socketio.on('sendMessage')
def handle_message(message):
    room = session.get('room')
    name = session.get('name')
    msg = message

    print('from sendMessage: user:', name, 'msg:', msg, room)

    emit('message', {'name': name, 'msg': msg}, room=room)


if __name__ == '__main__':
    socketio.run(app)
