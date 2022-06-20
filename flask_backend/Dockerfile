FROM python:3.8-slim

COPY . ./
WORKDIR /server
ENV PYTHONUNBUFFERED 1

RUN pip install -r ../requirements.txt
EXPOSE 5000

CMD ["python","../server.py"]