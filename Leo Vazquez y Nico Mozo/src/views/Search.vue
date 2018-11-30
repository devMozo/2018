<template>
  <div>
    <nav-bar/>
    <div class="search_box">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="form.source" placeholder="Select source">
            <el-option v-for="(option, index) in options" :label="option.value" :value="option.id" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.keyword" placeholder="Search by..."></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Search</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <span v-if="!searchResults.length">
        <i class="el-icon-loading"></i>
      </span>
      <span v-if="searchResults.length">
        <h4 class="result-h4"> Resultados de su busqueda </h4>
      </span>
      <el-row>
        <el-col class="wrapper-card" :span="8"  v-for="(item, index) in searchResults" :key="index">
          <el-card class="box-card">
            <div class="clicked-card" @click="selectItem(item)">
              <div slot="header" class="clearfix">
                <h3>{{ item.title }}</h3>
              </div>
              <div class="text item">
                <el-tag type="success" size="small" hit>
                  <b><i class="el-icon-circle-check"></i> </b>{{ item.companyName }}
                </el-tag>
                <el-tag type="info" size="small" hit>
                  <b><i class="el-icon-location"></i> </b>{{ item.location }}
                </el-tag>
                <el-tag type="warning" size="small" hit v-if="!item.avgSalary">
                  <b><i class="el-icon-location"></i> </b> Salary Unknown
                </el-tag>
              </div>
              <div class="description" v-if="item.description">
                <p> {{ formatDescription(item.description.replace(/<[^>]*>/g, '')) }} </p>
              </div>
              <div class="salary" v-if="item.avgSalary">
                <p> <b> <i class="el-icon-star-on" ></i>&nbsp;${{ item.avgSalary }}</b> / per year </p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'search',
  beforeCreate () {
    let strikes = 0;
    let interval = setInterval(() => {
      axios.get(URL + 'job/source')
      .then(({ data }) => {
        this.options = Object.keys(data).map(index => ({ id: index , value: data[index] }));
        this.onSubmit()
        clearInterval(interval)
      })
      .catch((err) => {
        this.$message.error("Error connection, we're gonna try in a moment againg");
        strikes++;
        if(strikes > 3) {
          this.$auth.destroyToken();
          clearInterval(interval)
          this.$router.push({ path: '/' })
        }
      });
    }, 3000)
  },
  data(){
    return {
      options: [],
      form: {
        source: '',
        keyword: ''
      },
      searchResults: []
    }
  },
  methods: {
    selectItem (item) {
      localStorage.setItem('job', JSON.stringify(item));
      this.$router.push({ path: 'job' });
    },
    logout () {
      this.$auth.destroyToken();
      this.$router.push({ path: '/' })
    },
    getSourceURL(source) {
      switch (source) {
        case "1":
          return URL + "job/adzuna-gb";
        case "2":
          return URL + "job/adzuna-us";
        case "3":
          return URL + "job/authentic-jobs";
        case "4":
          return URL + "job/github";
        case "5":
          return URL + "job/reed";
        case "6":
          return URL + "job/usa-jobs";
        case "7":
        default:
          return URL + "job/le-jobs"; 
      }
    },
    onSubmit () {
      this.searchResults = [];
      let strikes = 0;
      let interval = setInterval(() => {
        axios.get(this.getSourceURL(this.form.source), { params: { keywords: this.form.keyword } })
          .then(({ data }) => {
            this.searchResults = data;
            clearInterval(interval)
          })
          .catch(() => {
            this.$message.error("Error connection, we're gonna try in a moment againg");
            
            strikes++;
            
            if(strikes > 3) {
              this.$auth.destroyToken();
              clearInterval(interval)
              this.$router.push({ path: '/' })
            }
          });
      }, 3000);
    },
    formatDescription (text) {
      let sanitizedText = (text == null || text == undefined) ? "" : text
      return sanitizedText.length > 220 ? sanitizedText.substr(0, 220) + "..." : sanitizedText 
    }
  },
  components: {
    'nav-bar': Navbar
  }
}
</script>

<style>
  .search_box {
    padding: 40px;
    background-color: #333;
    -webkit-box-shadow: inset 0px 0px 74px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 74px 0px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 74px 0px rgba(0,0,0,0.75);
  }

  .search_box .el-form-item {
    margin-bottom: 0
  }

  .result-h4 {
    padding: 20px 0 10px
  }

  .el-icon-loading {
    padding: 50px;
    font-size: 50px
  }

  .clicked-card {
    cursor: pointer;
    transition: 0.3s
  }

  .clicked-card:hover {
    opacity: 0.6
  }

  .el-row {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 40px;
  }

  .wrapper-card {
    padding: 20px;
    vertical-align: top
  }

  .wrapper-card .box-card {
    text-align: left;

  }

  .wrapper-card .box-card .clearfix h3 {
    color: #444!important;
    font-size: 20px;
    text-transform: capitalize!important;
  }

  .wrapper-card .box-card .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .wrapper-card .box-card .text {
    color: #555!important;
  }

  .wrapper-card .box-card .description {
    color: #555!important;
  }

  .wrapper-card .box-card .salary {
    color: #555!important;
    font-size: 18px;
  }

  i.el-icon-star-on {
    color: #ffd700
  }

  .wrapper-card .box-card .text i{
    margin-right: 10px;
    opacity: 0.4;
    position: relative;
    top:1px;
  }
</style>


