FROM python:3.9.1

WORKDIR /projeto-05-crud-py-docker

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5002

CMD ["python", "main.py"]