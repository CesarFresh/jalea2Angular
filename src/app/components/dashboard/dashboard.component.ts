import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public checklistCategoria: any;
  public checkedListCategoria: any;
  public mostrarFiltro: boolean;
  public checkListProductos: any;
  public masterSelected: boolean;
  public filterButtons: boolean;
  public checkedListProducts: any;
  public invisibleListProducts: any;
  public visibleListProducts: any;

  constructor() {
      this.checklistCategoria = [
        {id: 'check1', data_id: 1, value: 'Categoría 1', isSelected: false},
        {id: 'check2', data_id: 2, value: 'Categoría 2', isSelected: false},
        {id: 'check3', data_id: 3, value: 'Categoría 3', isSelected: false}
      ];
      this.mostrarFiltro = false;
      this.checkListProductos = [
        {id: 'check5', data_id: 1, isSelected: false, imagen: 'https://via.placeholder.com/250x250', nombre: 'Bolso de mano tejido',  categoria: 'Bolsos', sku: '00001', precio: '$900.00', inventario: '15 disponibles', status: 'Visible'},
        {id: 'check6', data_id: 2, isSelected: false, imagen: 'https://via.placeholder.com/250x250', nombre: 'Bolso de mano tejido',  categoria: 'Bolsos', sku: '00001', precio: '$900.00', inventario: '0 disponibles', status: 'Invisible'},
        {id: 'check7', data_id: 3, isSelected: false, imagen: 'https://via.placeholder.com/250x250', nombre: 'Bolso de mano tejido',  categoria: 'Bolsos', sku: '00001', precio: '$900.00', inventario: '0 disponibles', status: 'Visible'},
        {id: 'check8', data_id: 4, isSelected: false, imagen: 'https://via.placeholder.com/250x250', nombre: 'Bolso de mano tejido',  categoria: 'Bolsos', sku: '00001', precio: '$900.00', inventario: '15 disponibles', status: 'Visible'}
      ];
      this.filterButtons = false;
  }

  ngOnInit(): void {
  }
  
  getCheckedListCategoria(){
    this.checkedListCategoria = [];
    for(var i = 0; i < this.checklistCategoria.length; i++){
      if(this.checklistCategoria[i].isSelected){
        this.checkedListCategoria.push(this.checklistCategoria[i]);
      }
    }
    this.checkedListCategoria = this.checkedListCategoria;
  }
  
  showCheckedCategories(){
    this.getCheckedListCategoria();
    console.log('Checkbox seleccionados por categoría');
    console.log(this.checkedListCategoria);
  }

  uncheckListCategoria(){
    for(var i = 0; i < this.checklistCategoria.length; i++){
      this.checklistCategoria[i].isSelected = false;
    }
    this.hideBorrarFiltros();
  }
  
  hideBorrarFiltros(){
    this.getCheckedListCategoria();
    if(this.checkedListCategoria.length > 0 ){
      this.mostrarFiltro = true;
    } else {
      this.mostrarFiltro = false;
    }
  } 

  checkUncheackProducts(){
    for (var i = 0; i < this.checkListProductos.length; i++) {
      this.checkListProductos[i].isSelected = this.masterSelected;
    }
    this.hideButtons();
  }
  
  isAllSelected(){
    for (var i = 0; i < this.checkListProductos.length; i++) {
      if (this.checkListProductos[i].isSelected == false ){
        this.masterSelected = false;
      } else {
        this.masterSelected = true;
      }
    }
    this.hideButtons();
  }

  getCheckedListProducts(){
    this.checkedListProducts = [];
    for(var i = 0; i < this.checkListProductos.length; i++){
      if(this.checkListProductos[i].isSelected){
        this.checkedListProducts.push(this.checkListProductos[i]);
      }
    }
    this.checkedListProducts = this.checkedListProducts;
  }

  hideButtons(){
    this.getCheckedListProducts();
    if(this.checkedListProducts.length > 0 ){
      this.filterButtons = true;
    } else {
      this.filterButtons = false;
    }
  }

  showInvisibleFields(){
    this.getCheckedListProducts();
    this.invisibleListProducts = [];
    for(var i = 0; i < this.checkListProductos.length; i++){
      if(this.checkListProductos[i].status == 'Invisible'){
        this.invisibleListProducts.push(this.checkListProductos[i]);
      }
    }
    console.log('Lista de productos con Estatus Invisible');
    console.log(this.invisibleListProducts);
  }

  showVisibleFields(){
    this.getCheckedListProducts();
    this.visibleListProducts = [];
    for(var i = 0; i < this.checkListProductos.length; i++){
      if(this.checkListProductos[i].status == 'Visible'){
        this.visibleListProducts.push(this.checkListProductos[i]);
      }
    }
    console.log('Lista de productos con Estatus Visible');
    console.log(this.visibleListProducts);
  }

}
