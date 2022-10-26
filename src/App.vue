
<template>
 <div class="container mt-3">
  <div class="grid">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">App Component</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat ipsam neque explicabo, ipsum ipsa vitae at et commodi recusandae non ducimus deleniti eum laboriosam vel, id reiciendis sunt maxime.
        </p>
      </div>
    
    </div>
    <Customer name="Dan" age="25" designation = "Engineer"/>
  </div>


 </div>
</template>

<script>
import Customer from "./components/Customer";
export default{
  components:{Customer}
}
</script>


<style>
  @import "./styles.css";

</style>
