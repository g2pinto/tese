# EarthlyConsensus System

In this repository is the EarthlyConsensus developed in the context of the thesis to obtain the masters degree in  Computer Science and Engineering, for Instituto Superior Técnico.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Hyperledger Fabric
* Ollama's Llama3
* Golang
* Ruby
* Npm
* Python3
* Django

### Installing

* The smart-contract chaincode needs to be installed in the blockchain network.

### Executing program

* First it is necessary to start the blockchain network using couchDb. On this project the test-network was used, for which the command is simply:
```
$ .\network.sh up -s couchdb
```
* Next, Loomio server needs to be started, for that:
```
$ cd looomio
$ rails s
```
And in another terminal
```
$ cd loomio/vue
$ npm run serve
```
* After this, you are ready to start the chainserver (EcoMonitor).
```
$ cd chainserver
$ python3 manage.py runserver
```

## Authors

Gustavo Pinto
David R. Matos

## Acknowledgments

Inspiration, code snippets, etc.
* [Loomio](https://github.com/loomio/loomio)
* [Hyperledger Fabric](https://github.com/hyperledger/fabric)