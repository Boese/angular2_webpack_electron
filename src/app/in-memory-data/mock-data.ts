import { Component, Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockData implements InMemoryDbService {
    createDb() {
        let data = [];

        return {data};
    }
}