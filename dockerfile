FROM python:3.11-alpine3.16 


WORKDIR /quests

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 8000

