echo "Running Cypress e2e tests headlessly without copying files"

# explanation of the "docker run" command line arguments
#
#  -it          = interactive terminal
#  -v $PWD:/e2e = map current folder to /e2e inside the container
#  -w /e2e      = set working directy to /e2e
#  $@           = pass any arguments to this script to the Cypress command
#                 like "./cy-run.sh --record"
#
# Docker image "cypress/included:3.2.0" has its entrypoint
# set to "cypress run" by default

# Command run with docker for mac
# docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_baseUrl=http://host.docker.internal:3000 -e CYPRESS_VIDEO=false cypress/included:3.4.1 $@

# Command run with normal docker on Linux
docker run -it -v $PWD:/e2e -w /e2e -e CYPRESS_baseUrl=https://google.com -e CYPRESS_VIDEO=false cypress/included:3.4.1 $@

# if you need to restrict amount of memory or CPU power the
# container can use, see
# https://docs.docker.com/config/containers/resource_constraints/
# restrict total memory
# --memory=600m --memory-swap=600m
# restrict CPU share
# --cpus=0.3
