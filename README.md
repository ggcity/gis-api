Garden Grove GIS API

https://www.ci.garden-grove.ca.us/maps/api/doc/

To refresh api after changes to api.rb:
apidoc -i . -o doc


To run docker:
sudo docker build -t api .
sudo docker run --name=api --restart=unless-stopped -d -v /srv/containers/api:/usr/src/app -p 4567:4567 api


To update packages:
sudo docker restart api
