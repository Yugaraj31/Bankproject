using System;
using System.Collections.Generic;

namespace bankproject.Entities;

public partial class Customer
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Gender { get; set; } = null!;

    public string Phonenum { get; set; } = null!;

    public string Emailid { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Dob { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string State { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Pincode { get; set; } = null!;

    public string Panid { get; set; } = null!;

    public string Aadharid { get; set; } = null!;

    public string Accountstatus { get; set; } = null!;

    public virtual Approved? Approved { get; set; }
}
