import { Resource, Serializer } from '../bo/Util';

export class Service extends Resource {
    name: string;
    cost: string;
    barberId: string;
    length: string;
}

export class ServiceSerializer implements Serializer {

    fromJson(json: any): Service {
        const service = new Service();
        service.id = json.id;
        service.name = json.name;
        service.cost = json.cost;
        service.barberId = json.barberId;
        service.length = json.length;
        return service;
    }

    toJson(service: Service): any {
        return {
            id: service.id,
            name: service.name,
            cost: service.cost,
            barberId: service.barberId,
            length: service.length
        };
    }

}