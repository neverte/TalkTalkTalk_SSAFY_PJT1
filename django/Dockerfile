FROM python:3.6.7
MAINTAINER ian.ilminmoon@gmail.com
ENV PYTHONDONTWRITEBYTECODE=True

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./requirements.txt /usr/src/app/requirements.txt

RUN pip install -r requirements.txt

ADD . /usr/src/app

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]