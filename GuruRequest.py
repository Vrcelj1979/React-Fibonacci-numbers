from http.server import HTTPServer, BaseHTTPRequestHandler
import requests


class Serv(BaseHTTPRequestHandler):

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))


httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()

payload = {'fibidx': 'value'}
res = requests.get('http://localhost:3000/get', data=payload)

print(res)


def fibonacci(res):
    a, b = 0, 1
    for i in range(res):
        a, b = b, a + b
    return a

payload = {'a'}
res = requests.post('http://localhost:3000/post', data=payload)

