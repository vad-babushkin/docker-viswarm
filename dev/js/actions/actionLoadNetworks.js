
import * as ACTIONS from './actionTypes';

const mockResponse = {"objects":[{"Name":"bridge","Id":"f2de39df4171b0dc801e8002d1d999b77256983dfc63041c0f34030aa3977566","Created":"2016-10-19T06:21:00.416543526Z","Scope":"local","Driver":"bridge","EnableIPv6":false,"Internal":false,"Attachable":false,"Ingress":false,"IPAM":{"Driver":"default","Config":[{"Subnet":"172.17.0.0/16"}]},"Containers":{"39b69226f9d79f5634485fb236a23b2fe4e96a0a94128390a7fbbcc167065867":{"EndpointID":"ed2419a97c1d9954d05b46e462e7002ea552f216e9b136b80a7db8d98b442eda","MacAddress":"02:42:ac:11:00:02","IPv4Address":"172.17.0.2/16","IPv6Address":""}},"Options":{"com.docker.network.bridge.default_bridge":"true","com.docker.network.bridge.enable_icc":"true","com.docker.network.bridge.enable_ip_masquerade":"true","com.docker.network.bridge.host_binding_ipv4":"0.0.0.0","com.docker.network.bridge.name":"docker0","com.docker.network.driver.mtu":"1500"}}]};

function getAllNetworksAsync(data) {    
    return {
        type: ACTIONS.GET_NETWORKS,
        payload: data
    };
}


export default function getAllNetworks() {
    return dispatch => {        
        axios.get('/api/networks')
             .then(res => {
				 dispatch(getAllNetworksAsync(res.data));
             }, error => {
				 dispatch(getAllNetworksAsync(mockResponse.objects));
             });
    }
}