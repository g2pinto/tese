package chaincode

import (
	"encoding/json"
	"fmt"
	"strconv"
	"strings"

	"github.com/hyperledger/fabric-chaincode-go/shim"
	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

// SmartContract provides functions for managing an Asset
type SmartContract struct {
	contractapi.Contract
}

// Asset describes basic details of what makes up a simple asset
// Insert struct field in alphabetic order => to achieve determinism across languages
// golang keeps the order when marshal to json but doesn't order automatically
type DataAsset struct {
	Id      string `json:"ID"`
	DocType string `json:"DocType"`
	Title   string `json:"Title"`
	Value   int    `json:"one_hash"`
	Date    string `json:"two_hash"`
	//Author           string `json:"Author"`
}

// Asset describes basic details of what makes up a simple asset
// Insert struct field in alphabetic order => to achieve determinism across languages
// golang keeps the order when marshal to json but doesn't order automatically
type PollAsset struct {
	ID             string   `json:"ID"`
	DocType        string   `json:"DocType"`
	Title_hash     string   `json:"Title"`
	Options_hash   []string `json:"options_hash"`
	Options_voting []int    `json:"options"`
	//Author           string `json:"Author"`
}

// InitLedger adds a base set of assets to the ledger
func (s *SmartContract) InitPolls(ctx contractapi.TransactionContextInterface) error {
	assets := []PollAsset{
		//{ID: "asset1", Color: "blue", Size: 5, Owner: "Tomoko", AppraisedValue: 300},
		//{ID: "asset2", Color: "red", Size: 5, Owner: "Brad", AppraisedValue: 400},
		//{ID: "asset3", Color: "green", Size: 10, Owner: "Jin Soo", AppraisedValue: 500},
		//{ID: "asset4", Color: "yellow", Size: 10, Owner: "Max", AppraisedValue: 600},
		//{ID: "asset5", Color: "black", Size: 15, Owner: "Adriana", AppraisedValue: 700},
		//{ID: "asset6", Color: "white", Size: 15, Owner: "Michel", AppraisedValue: 800},
	}

	for _, asset := range assets {
		assetJSON, err := json.Marshal(asset)
		if err != nil {
			return err
		}

		err = ctx.GetStub().PutState(asset.ID, assetJSON)
		if err != nil {
			return fmt.Errorf("failed to put to world state. %v", err)
		}
	}

	return nil
}

// CreateAsset issues a new asset to the world state with given details.
func (s *SmartContract) CreatePoll(ctx contractapi.TransactionContextInterface, id string, title string, options_hash string, options_voting string) error {
	exists, err := s.AssetExists(ctx, id)
	if err != nil {
		return fmt.Errorf("exists error %s: ", err)
	}
	if exists {
		return fmt.Errorf("the asset %s already exists", id)
	}

	var options_hash_array = parseStringToArray(options_hash)
	var options_voting_array []int
	options_voting_array, err = parseStringToIntArray(options_voting)
	if err != nil {
		return fmt.Errorf("parse error %s: ", err)
	}

	asset := &PollAsset{
		ID:         id,
		DocType:    "Poll",
		Title_hash: title,
		//Description: description,
		Options_hash:   options_hash_array,
		Options_voting: options_voting_array,
	}

	assetJSON, err := json.Marshal(asset)
	if err != nil {
		return fmt.Errorf("marshal error %s: ", err)
	}

	return ctx.GetStub().PutState(id, assetJSON)
}

func parseStringToArray(input string) []string {
	// Trim "[" and "]" from the input string
	input = strings.Trim(input, "[]")

	// Split the input string by ","
	items := strings.Split(input, ",")

	// Remove any leading or trailing spaces from each item
	for i, item := range items {
		items[i] = strings.TrimSpace(item)
	}

	return items
}

func parseStringToIntArray(input string) ([]int, error) {
	// Trim "[" and "]" from the input string
	input = strings.Trim(input, "[]")

	// Split the input string by ","
	items := strings.Split(input, ",")

	// Initialize an empty integer slice
	var integers []int

	// Convert each item to an integer
	for _, item := range items {
		// Convert item to integer
		num, err := strconv.Atoi(strings.TrimSpace(item))
		if err != nil {
			return nil, err
		}
		// Append integer to the slice
		integers = append(integers, num)
	}

	return integers, nil
}

// ReadAsset returns the asset stored in the world state with given id.
func (s *SmartContract) ReadPoll(ctx contractapi.TransactionContextInterface, id string) (*PollAsset, error) {
	assetJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, fmt.Errorf("failed to read from world state: %v", err)
	}
	if assetJSON == nil {
		return nil, fmt.Errorf("the Poll %s does not exist", id)
	}

	var asset PollAsset
	err = json.Unmarshal(assetJSON, &asset)
	if err != nil {
		return nil, err
	}

	return &asset, nil
}

// UpdateAsset updates an existing asset in the world state with provided parameters.
func (s *SmartContract) UpdatePoll(ctx contractapi.TransactionContextInterface, id string, title string, options_hash string, options_voting string) error {
	exists, err := s.PollExists(ctx, id)
	if err != nil {
		return err
	}
	if !exists {
		return fmt.Errorf("the asset %s does not exist", id)
	}

	var options_hash_array = parseStringToArray(options_hash)
	var options_voting_array []int
	options_voting_array, err = parseStringToIntArray(options_voting)
	if err != nil {
		return err
	}

	asset := PollAsset{
		ID:         id,
		Title_hash: title,
		//Description: description,
		Options_hash:   options_hash_array,
		Options_voting: options_voting_array,
		DocType:        "Poll",
		//Author: author,
	}
	assetJSON, err := json.Marshal(asset)
	if err != nil {
		return err
	}

	return ctx.GetStub().PutState(id, assetJSON)
}

// UpdateAsset updates an existing asset in the world state with provided parameters.
func (s *SmartContract) VotePoll(ctx contractapi.TransactionContextInterface, id string, option_hash string) error {
	assetJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return fmt.Errorf("failed to read from world state: %v", err)
	}
	if assetJSON == nil {
		return fmt.Errorf("the Poll %s does not exist", id)
	}

	var asset PollAsset
	err = json.Unmarshal(assetJSON, &asset)
	if err != nil {
		return err
	}

	var options = asset.Options_hash
	var i int
	for i = 0; i < len(options); i++ {
		if options[i] == option_hash {
			break
		}
	}

	var options_voting_new = asset.Options_voting
	options_voting_new[i] = asset.Options_voting[i] + 1

	VotedAsset := PollAsset{
		ID:         asset.ID,
		Title_hash: asset.Title_hash,
		//Description: description,
		Options_hash:   asset.Options_hash,
		Options_voting: options_voting_new,
		DocType:        "Poll",
		//Author: author,
	}

	votedAssetJSON, err := json.Marshal(VotedAsset)
	if err != nil {
		return err
	}

	return ctx.GetStub().PutState(id, votedAssetJSON)
}

// DeleteAsset deletes an given asset from the world state.
func (s *SmartContract) DeletePoll(ctx contractapi.TransactionContextInterface, id string) error {
	exists, err := s.PollExists(ctx, id)
	if err != nil {
		return err
	}
	if !exists {
		return fmt.Errorf("the asset %s does not exist", id)
	}

	return ctx.GetStub().DelState(id)
}

// AssetExists returns true when asset with given ID exists in world state
func (s *SmartContract) PollExists(ctx contractapi.TransactionContextInterface, id string) (bool, error) {
	assetJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return false, fmt.Errorf("failed to read from world state: %v", err)
	}
	if assetJSON == nil {
		return false, nil
	}
	var asset DataAsset
	err = json.Unmarshal(assetJSON, &asset)
	if err != nil {
		return false, err
	}

	return asset.DocType == "Poll", nil
}

// InitLedger adds a base set of assets to the ledger
func (s *SmartContract) InitData(ctx contractapi.TransactionContextInterface) error {
	assets := []DataAsset{
		//{ID: "asset1", Color: "blue", Size: 5, Owner: "Tomoko", AppraisedValue: 300},
		//{ID: "asset2", Color: "red", Size: 5, Owner: "Brad", AppraisedValue: 400},
		//{ID: "asset3", Color: "green", Size: 10, Owner: "Jin Soo", AppraisedValue: 500},
		//{ID: "asset4", Color: "yellow", Size: 10, Owner: "Max", AppraisedValue: 600},
		//{ID: "asset5", Color: "black", Size: 15, Owner: "Adriana", AppraisedValue: 700},
		//{ID: "asset6", Color: "white", Size: 15, Owner: "Michel", AppraisedValue: 800},
	}

	for _, asset := range assets {
		assetJSON, err := json.Marshal(asset)
		if err != nil {
			return err
		}

		err = ctx.GetStub().PutState(asset.Id, assetJSON)
		if err != nil {
			return fmt.Errorf("failed to put to world state. %v", err)
		}
	}

	return nil
}

// CreateAsset issues a new asset to the world state with given details.
func (s *SmartContract) CreateData(ctx contractapi.TransactionContextInterface, id string, title string, value int, date string) error {
	exists, err := s.AssetExists(ctx, id)
	if err != nil {
		return err
	}
	if exists {
		return fmt.Errorf("the asset %s already exists", id)
	}

	asset := &DataAsset{
		Id:      id,
		DocType: "Data",
		Title:   title,
		Value:   value,
		Date:    date,
		//Author: author,
	}
	assetJSON, err := json.Marshal(asset)
	if err != nil {
		return fmt.Errorf("marshal error %s: ", err)
	}

	return ctx.GetStub().PutState(id, assetJSON)
}

// ReadAsset returns the asset stored in the world state with given id.
func (s *SmartContract) ReadData(ctx contractapi.TransactionContextInterface, id string) (*DataAsset, error) {
	assetJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, fmt.Errorf("failed to read from world state: %v", err)
	}
	if assetJSON == nil {
		return nil, fmt.Errorf("the Data %s does not exist", id)
	}

	var asset DataAsset
	err = json.Unmarshal(assetJSON, &asset)
	if err != nil {
		return nil, err
	}

	return &asset, nil
}

func (t *SmartContract) QueryDataByTitle(ctx contractapi.TransactionContextInterface, owner string) ([]*DataAsset, error) {
	queryString := fmt.Sprintf(`{"selector":{"DocType":"Data","Title":"%s"}}`, owner)
	return getQueryResultForQueryString(ctx, queryString)
}

func (t *SmartContract) QueryPollByTitle(ctx contractapi.TransactionContextInterface, owner string) ([]*DataAsset, error) {
	queryString := fmt.Sprintf(`{"selector":{"DocType":"Poll","Title":"%s"}}`, owner)
	return getQueryResultForQueryString(ctx, queryString)
}

func getQueryResultForQueryString(ctx contractapi.TransactionContextInterface, queryString string) ([]*DataAsset, error) {
	resultsIterator, err := ctx.GetStub().GetQueryResult(queryString)
	if err != nil {
		return nil, err
	}
	defer resultsIterator.Close()

	return constructQueryResponseFromIterator(resultsIterator)
}

func constructQueryResponseFromIterator(resultsIterator shim.StateQueryIteratorInterface) ([]*DataAsset, error) {
	var assets []*DataAsset
	for resultsIterator.HasNext() {
		queryResult, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}
		var asset DataAsset
		err = json.Unmarshal(queryResult.Value, &asset)
		if err != nil {
			return nil, err
		}
		assets = append(assets, &asset)
	}

	fmt.Println("projects")
	fmt.Printf("%v", assets)

	return assets, nil
}

// DeleteAsset deletes an given asset from the world state.
func (s *SmartContract) DeleteData(ctx contractapi.TransactionContextInterface, id string) error {
	exists, err := s.DataExists(ctx, id)
	if err != nil {
		return err
	}
	if !exists {
		return fmt.Errorf("the asset %s does not exist", id)
	}

	return ctx.GetStub().DelState(id)
}

// AssetExists returns true when asset with given ID exists in world state
func (s *SmartContract) DataExists(ctx contractapi.TransactionContextInterface, id string) (bool, error) {
	assetJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return false, fmt.Errorf("failed to read from world state: %v", err)
	}
	if assetJSON == nil {
		return false, nil
	}
	var asset DataAsset
	err = json.Unmarshal(assetJSON, &asset)
	if err != nil {
		return false, err
	}

	return asset.DocType == "Data", nil
}

func (s *SmartContract) AssetExists(ctx contractapi.TransactionContextInterface, id string) (bool, error) {
	assetJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return false, fmt.Errorf("failed to read from world state: %v", err)
	}

	return assetJSON != nil, nil
}

/*
// TransferAsset updates the owner field of asset with given id in world state, and returns the old owner.
func (s *SmartContract) TransferAsset(ctx contractapi.TransactionContextInterface, id int, newOwner string) (string, error) {
	asset, err := s.ReadAsset(ctx, id)
	if err != nil {
		return "", err
	}

	oldOwner := asset.Owner
	asset.Owner = newOwner

	assetJSON, err := json.Marshal(asset)
	if err != nil {
		return "", err
	}

	err = ctx.GetStub().PutState(id, assetJSON)
	if err != nil {
		return "", err
	}

	return oldOwner, nil
}

// GetAllAssets returns all assets found in world state
func (s *SmartContract) GetAllAssets(ctx contractapi.TransactionContextInterface) ([]*DataAsset, error) {
	// range query with empty string for startKey and endKey does an
	// open-ended query of all assets in the chaincode namespace.
	resultsIterator, err := ctx.GetStub().GetStateByRange("", "")
	if err != nil {
		return nil, err
	}
	defer resultsIterator.Close()

	var assets []*DataAsset
	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}

		var asset DataAsset
		err = json.Unmarshal(queryResponse.Value, &asset)
		if err != nil {
			return nil, err
		}
		assets = append(assets, &asset)
	}

	return assets, nil
}

*/
