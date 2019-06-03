package dto;
// Generated May 22, 2019 4:10:30 PM by Hibernate Tools 4.3.1

import dto.common.IDTO;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * User generated by hbm2java
 */
@Entity
@Table(name = "user",
       catalog = "solarhubweb"
)
public class User implements Serializable, IDTO {
    private long id;
    private Role role;
    private UserStatus userStatus;
    private String username;
    private String password;
    private String fullName;
    private boolean gender;
    private String email;
    private String phoneNumber;
    private String address;
    private Date createdDate;
    private Date lastModifiedDate;
    private Set<Order> orders;

    public User() {
        this.orders = new HashSet<>(0);
    }

    public User(long id,
                Role role,
                UserStatus userStatus,
                String username,
                String password,
                String fullName,
                boolean gender,
                String email,
                String phoneNumber,
                String address,
                Date createdDate,
                Date lastModifiedDate) {
        this.orders = new HashSet<>(0);
        this.id = id;
        this.role = role;
        this.userStatus = userStatus;
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
    }

    public User(long id,
                Role role,
                UserStatus userStatus,
                String username,
                String password,
                String fullName,
                boolean gender,
                String email,
                String phoneNumber,
                String address,
                Date createdDate,
                Date lastModifiedDate,
                Set<Order> orders) {
        this.orders = new HashSet<>(0);
        this.id = id;
        this.role = role;
        this.userStatus = userStatus;
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
        this.orders = orders;
    }

    @Id
    @Column(name = "Id",
            unique = true,
            nullable = false)
    @Override
    public long getId() {
        return this.id;
    }

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RoleId",
                nullable = false)
    public Role getRole() {
        return this.role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UserStatusId",
                nullable = false)
    public UserStatus getUserStatus() {
        return this.userStatus;
    }

    public void setUserStatus(UserStatus userStatus) {
        this.userStatus = userStatus;
    }

    @Column(name = "Username",
            nullable = false)
    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column(name = "Password",
            nullable = false)
    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "FullName",
            nullable = false)
    public String getFullName() {
        return this.fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Column(name = "Gender",
            nullable = false)
    public boolean isGender() {
        return this.gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    @Column(name = "Email",
            nullable = false)
    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "PhoneNumber",
            nullable = false,
            length = 10)
    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Column(name = "Address",
            nullable = false)
    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CreatedDate",
            nullable = false,
            length = 26)
    public Date getCreatedDate() {
        return this.createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "LastModifiedDate",
            nullable = false,
            length = 26)
    public Date getLastModifiedDate() {
        return this.lastModifiedDate;
    }

    public void setLastModifiedDate(Date lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    @OneToMany(fetch = FetchType.LAZY,
               mappedBy = "user")
    public Set<Order> getOrders() {
        return this.orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }
}