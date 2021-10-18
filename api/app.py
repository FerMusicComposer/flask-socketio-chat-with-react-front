import time
from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, manage_session=False)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == '__main__':
    socketio.run(app)