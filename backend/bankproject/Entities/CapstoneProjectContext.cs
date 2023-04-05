using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace bankproject.Entities;

public partial class CapstoneProjectContext : DbContext
{
    public CapstoneProjectContext()
    {
    }

    public CapstoneProjectContext(DbContextOptions<CapstoneProjectContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Approved> Approveds { get; set; }

    public virtual DbSet<Approver> Approvers { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=tcp:poseidonserver.database.windows.net,1433;Initial Catalog=capstone-project;persist security info=false;User ID=poseidon;Password=Program@123;trustservercertificate=false");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Approved>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__approved__3213E83FDEE10800");

            entity.ToTable("approved");

            entity.HasIndex(e => e.Customerid, "UQ__approved__B61ED7F4D07B5D8F").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Accountno)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("accountno");
            entity.Property(e => e.Accpin)
                .HasMaxLength(4)
                .IsUnicode(false)
                .HasColumnName("accpin");
            entity.Property(e => e.Customerid).HasColumnName("customerid");
            entity.Property(e => e.Ifsccode)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("ifsccode");

            entity.HasOne(d => d.Customer).WithOne(p => p.Approved)
                .HasForeignKey<Approved>(d => d.Customerid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__approved__custom__7C4F7684");
        });

        modelBuilder.Entity<Approver>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__approver__3213E83F531038E5");

            entity.ToTable("approver");

            entity.HasIndex(e => e.Emailid, "UQ__approver__8734520B1A548FC4").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Emailid)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("emailid");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__customer__3213E83F822E95FF");

            entity.ToTable("customer");

            entity.HasIndex(e => e.Emailid, "UQ__customer__8734520B941CF3F2").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Aadharid)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("aadharid");
            entity.Property(e => e.Accountstatus)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasColumnName("accountstatus");
            entity.Property(e => e.Address)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("address");
            entity.Property(e => e.City)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("city");
            entity.Property(e => e.Dob)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("dob");
            entity.Property(e => e.Emailid)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("emailid");
            entity.Property(e => e.Gender)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("gender");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Panid)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("panid");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Phonenum)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("phonenum");
            entity.Property(e => e.Pincode)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("pincode");
            entity.Property(e => e.State)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("state");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
