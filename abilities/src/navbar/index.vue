<template>
  <b-navbar toggleable type="dark" variant="dark" toggle-breakpoint="large" class="px-0 py-5">
    <b-container  class="px-0">
      <b-row align-v="center" no-gutters=true>
        <b-col cols="2" md="4">
          <b-dropdown variant="link" no-caret>
            <template slot="button-content">
              <i class="icon-nav-bars"></i></i><span class="sr-only">Menu</span>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col cols="8" md="4">
          <b-nav-brand><img src="../assets/img/abilities_logo.png"></b-nav-brand>
        </b-col>
        <b-col cols="2" md="4">
          <b-dropdown variant="link" size="lg" no-caret>
            <template slot="button-content">
              <i class="icon-search"></i><span class="sr-only">Search</span>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script src="./navbar.component.js"></script>
<style src="./navbar.component.scss" lang="scss"></style>

