cd go/src/github.com/g2pinto/fabric-samples/test-network

cd ../asset-transfer-basic/chaincode-go-remade/

GO111MODULE=on go mod vendor

cd ../../test-network

./network.sh deployCC -ccn remade -ccp ../asset-transfer-basic/chaincode-go-remade -ccl go



