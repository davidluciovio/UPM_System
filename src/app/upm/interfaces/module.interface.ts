export interface IModule {
    name: string;
    icon: string;
    subModules: ISubModule[];
}

export interface ISubModule {
    name: string;
    route: string;
    
}