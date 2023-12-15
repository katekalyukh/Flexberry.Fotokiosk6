docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk6-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t fotokiosk6-java/app ../../..
