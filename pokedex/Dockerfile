FROM python:3.14-rc-bookworm

WORKDIR /app

COPY main.py requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY pokemon.json ./

EXPOSE 5000

CMD ["python", "main.py"]
