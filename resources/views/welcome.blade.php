@extends('admin.index')

@section('breadcrumb')
<nav aria-label="breadcrumb">
    <ol class="breadcrumb rounded-pill">
        <li class="breadcrumb-item"><a href="/home"><i class="bx bx-home"></i></a></li>
        <li class="breadcrumb-item active" aria-current="page">Panel de Control</li>
    </ol>
</nav>
@endsection

@section('content')
<section id="dashboard-ecommerce">
    <div class="row">
        <!-- Greetings Content Starts -->
        <div class="col-xl-4 col-md-6 col-12 dashboard-greetings">
            <div class="card">
                <div class="card-header">
                    <h3 class="greeting-text">Congratulations John!</h3>
                    <p class="mb-0">Best seller of the month</p>
                </div>
                <div class="card-content">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="dashboard-content-left">
                                <h1 class="text-primary font-large-2 text-bold-500">$89k</h1>
                                <p>You have done 57.6% more sales today.</p>
                                <button type="button" class="btn btn-primary glow">View Sales</button>
                            </div>
                            <div class="dashboard-content-right">

                                <img src="/img/icon/cup.png" height="220" width="220"
                                    class="img-fluid" alt="Dashboard Ecommerce" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Multi Radial Chart Starts -->
        <div class="col-xl-4 col-md-6 col-12 dashboard-visit">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">Visits of 2019</h4>
                    <i class="bx bx-dots-vertical-rounded font-medium-3 cursor-pointer"></i>
                </div>
                <div class="card-content">
                    <div class="card-body">
                        <div id="multi-radial-chart"></div>
                        <ul class="list-inline d-flex justify-content-around mb-0">
                            <li> <span class="bullet bullet-xs bullet-primary mr-50"></span>Target</li>
                            <li> <span class="bullet bullet-xs bullet-danger mr-50"></span>Mart</li>
                            <li> <span class="bullet bullet-xs bullet-warning mr-50"></span>Ebay</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

@section('content')

@endsection

@section('css_vendor')
@endsection

@section('css_page')

@endsection

@section('css_theme')

@endsection

@section('css_custom')

@endsection

@section('js_vendor')

@endsection

@section('js_page')

@endsection

@section('js_theme')

@endsection

@section('js_custom')

@endsection
